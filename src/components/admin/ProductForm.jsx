import React, { useState } from 'react';
import { FaSave, FaTimes, FaPlus, FaArrowLeft, FaArrowRight, FaCheck } from 'react-icons/fa';
import Button from '../ui/Button';

const ProductForm = ({ product, onSubmit, onCancel, loading }) => {
  const isEditing = !!product;
  const [currentStep, setCurrentStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState(new Set(isEditing ? [1, 2, 3] : []));
  const [formData, setFormData] = useState({
    name: product?.name || '',
    price: product?.price || '',
    category: product?.category || '',
    description: product?.description || '',
    brand: product?.brand || '',
    size: product?.size || '',
    fragranceType: product?.fragranceType || '',
    notes: product?.notes || { top: [], middle: [], base: [] },
    longevity: product?.longevity || '',
    sillage: product?.sillage || '',
    images: []
  });
  
  React.useEffect(() => {
    if (product) {
      setFormData({
        name: product.name || '',
        price: product.price || '',
        category: product.category || '',
        description: product.description || '',
        brand: product.brand || '',
        size: product.size || '',
        fragranceType: product.fragranceType || '',
        notes: product.notes || { top: [], middle: [], base: [] },
        longevity: product.longevity || '',
        sillage: product.sillage || '',
        images: []
      });
    }
  }, [product]);

  const getStepValidation = (step) => {
    switch (step) {
      case 1:
        return formData.name && formData.brand && formData.category;
      case 2:
        return formData.price && formData.size && formData.fragranceType;
      case 3:
        return true;
      default:
        return false;
    }
  };

  const nextStep = () => {
    if (getStepValidation(currentStep)) {
      setCompletedSteps(prev => new Set([...prev, currentStep]));
      setCurrentStep(prev => Math.min(prev + 1, 3));
    }
  };

  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));
  const goToStep = (step) => setCurrentStep(step);

  const canSubmit = () => {
    return getStepValidation(1) && getStepValidation(2);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const submitData = new FormData();
    submitData.append('name', formData.name);
    submitData.append('price', formData.price);
    submitData.append('category', formData.category);
    submitData.append('description', formData.description);
    submitData.append('brand', formData.brand);
    submitData.append('size', formData.size);
    submitData.append('fragranceType', formData.fragranceType);
    submitData.append('notes', JSON.stringify(formData.notes));
    submitData.append('longevity', formData.longevity);
    submitData.append('sillage', formData.sillage);
    
    if (formData.images && formData.images.length > 0) {
      formData.images.forEach(image => {
        submitData.append('images', image);
      });
    }
    
    onSubmit(submitData);
  };

  const compressImage = (file, maxWidth = 800, quality = 0.8) => {
    return new Promise((resolve) => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      const img = new Image();
      
      img.onload = () => {
        const ratio = Math.min(maxWidth / img.width, maxWidth / img.height);
        canvas.width = img.width * ratio;
        canvas.height = img.height * ratio;
        
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        canvas.toBlob(resolve, 'image/jpeg', quality);
      };
      
      img.src = URL.createObjectURL(file);
    });
  };

  const handleImageChange = async (e) => {
    const files = Array.from(e.target.files);
    const compressedFiles = await Promise.all(
      files.map(file => compressImage(file))
    );
    setFormData({ ...formData, images: compressedFiles });
  };

  const stepTitles = {
    1: 'Basic Info',
    2: 'Details',
    3: 'Extras'
  };

  const renderStepIndicator = () => (
    <div className="mb-6">
      <div className="flex items-center justify-center mb-4">
        {[1, 2, 3].map((step) => (
          <React.Fragment key={step}>
            <button
              onClick={() => (isEditing || completedSteps.has(step) || step <= currentStep) && goToStep(step)}
              disabled={!isEditing && !completedSteps.has(step) && step > currentStep}
              className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold elegant-transition ${
                step === currentStep ? 'bg-gold text-charcoal scale-110' : 
                completedSteps.has(step) ? 'bg-charcoal text-beige-light hover:bg-charcoal-light' : 
                'bg-beige-dark text-charcoal-light'
              } ${(isEditing || completedSteps.has(step) || step <= currentStep) ? 'cursor-pointer' : 'cursor-not-allowed'}`}
            >
              {completedSteps.has(step) && step !== currentStep ? <FaCheck className="text-xs" /> : step}
            </button>
            {step < 3 && <div className={`w-12 h-0.5 mx-2 ${
              completedSteps.has(step) ? 'bg-charcoal' : 'bg-beige-dark'
            }`} />}
          </React.Fragment>
        ))}
      </div>
      <div className="text-center">
        <h3 className="text-lg font-semibold text-charcoal">{stepTitles[currentStep]}</h3>
        <p className="text-sm text-charcoal-light">Step {currentStep} of 3</p>
      </div>
    </div>
  );

  return (
    <div className="card-elegant p-4 sm:p-6 mb-6">
      <div className="flex items-center space-x-3 mb-4 sm:mb-6">
        <div className="w-8 h-8 bg-gold rounded-lg flex items-center justify-center">
          <FaPlus className="text-charcoal text-sm" />
        </div>
        <h2 className="text-lg sm:text-xl font-semibold text-charcoal">
          {product ? 'Edit Fragrance' : 'Add New Fragrance'}
        </h2>
      </div>
      
      {renderStepIndicator()}
      
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Step 1: Basic Information */}
        {currentStep === 1 && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-charcoal mb-4">Basic Information</h3>
            <div className="space-y-2">
              <label className="text-sm font-medium text-charcoal-light">Fragrance Name</label>
              <input
                type="text"
                placeholder="Enter fragrance name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full px-3 py-2 elegant-border rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent text-sm text-charcoal bg-beige-light elegant-transition"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-charcoal-light">Brand</label>
              <input
                type="text"
                placeholder="e.g., Tom Ford, Chanel, Dior"
                value={formData.brand}
                onChange={(e) => setFormData({...formData, brand: e.target.value})}
                className="w-full px-3 py-2 elegant-border rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent text-sm text-charcoal bg-beige-light elegant-transition"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-charcoal-light">Category</label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({...formData, category: e.target.value})}
                className="w-full px-3 py-2 elegant-border rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent text-sm text-charcoal bg-beige-light elegant-transition"
                required
              >
                <option value="">Select Category</option>
                <option value="Men">Men</option>
                <option value="Women">Women</option>
                <option value="Unisex">Unisex</option>

              </select>
            </div>
          </div>
        )}

        {/* Step 2: Product Details */}
        {currentStep === 2 && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-charcoal mb-4">Product Details</h3>
            <div className="space-y-2">
              <label className="text-sm font-medium text-charcoal-light">Price</label>
              <input
                type="text"
                placeholder="e.g., ₦85,000"
                value={formData.price}
                onChange={(e) => setFormData({...formData, price: e.target.value})}
                className="w-full px-3 py-2 elegant-border rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent text-sm text-charcoal bg-beige-light elegant-transition"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-charcoal-light">Size</label>
              <input
                type="text"
                placeholder="e.g., 100ml, 50ml, 30ml"
                value={formData.size}
                onChange={(e) => setFormData({...formData, size: e.target.value})}
                className="w-full px-3 py-2 elegant-border rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent text-sm text-charcoal bg-beige-light elegant-transition"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-charcoal-light">Fragrance Type</label>
              <select
                value={formData.fragranceType}
                onChange={(e) => setFormData({...formData, fragranceType: e.target.value})}
                className="w-full px-3 py-2 elegant-border rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent text-sm text-charcoal bg-beige-light elegant-transition"
                required
              >
                <option value="">Select Type</option>
                <option value="Eau de Parfum">Eau de Parfum</option>
                <option value="Eau de Toilette">Eau de Toilette</option>
                <option value="Parfum">Parfum</option>
                <option value="Cologne">Cologne</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-charcoal-light">Longevity</label>
              <select
                value={formData.longevity}
                onChange={(e) => setFormData({...formData, longevity: e.target.value})}
                className="w-full px-3 py-2 elegant-border rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent text-sm text-charcoal bg-beige-light elegant-transition"
              >
                <option value="">Select Longevity</option>
                <option value="2-4 hours">2-4 hours</option>
                <option value="4-6 hours">4-6 hours</option>
                <option value="6-8 hours">6-8 hours</option>
                <option value="8+ hours">8+ hours</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-charcoal-light">Sillage</label>
              <select
                value={formData.sillage}
                onChange={(e) => setFormData({...formData, sillage: e.target.value})}
                className="w-full px-3 py-2 elegant-border rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent text-sm text-charcoal bg-beige-light elegant-transition"
              >
                <option value="">Select Sillage</option>
                <option value="Light">Light</option>
                <option value="Moderate">Moderate</option>
                <option value="Strong">Strong</option>
                <option value="Very Strong">Very Strong</option>
              </select>
            </div>
          </div>
        )}

        {/* Step 3: Additional Details */}
        {currentStep === 3 && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-charcoal mb-4">Additional Details</h3>
            <div className="space-y-2">
              <label className="text-sm font-medium text-charcoal-light">Product Images</label>
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={handleImageChange}
                className="w-full px-3 py-2 elegant-border rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent text-sm text-charcoal bg-beige-light elegant-transition file:mr-2 file:py-1 file:px-2 file:rounded file:border-0 file:bg-gold/10 file:text-charcoal file:text-xs"
              />
              <p className="text-xs text-charcoal-light">Select multiple images for this fragrance</p>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-charcoal-light">Description</label>
              <textarea
                placeholder="Enter fragrance description"
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
                rows={3}
                className="w-full px-3 py-2 elegant-border rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent text-sm text-charcoal bg-beige-light elegant-transition resize-none"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-charcoal-light">Fragrance Notes</label>
              <div className="space-y-3">
                <div>
                  <label className="text-xs text-charcoal-light">Top Notes</label>
                  <input
                    type="text"
                    placeholder="e.g., Bergamot, Lemon"
                    value={formData.notes.top.join(', ')}
                    onChange={(e) => setFormData({...formData, notes: {...formData.notes, top: e.target.value.split(', ').filter(n => n.trim())}})}
                    className="w-full px-3 py-2 elegant-border rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent text-sm text-charcoal bg-beige-light elegant-transition"
                  />
                </div>
                <div>
                  <label className="text-xs text-charcoal-light">Middle Notes</label>
                  <input
                    type="text"
                    placeholder="e.g., Rose, Jasmine"
                    value={formData.notes.middle.join(', ')}
                    onChange={(e) => setFormData({...formData, notes: {...formData.notes, middle: e.target.value.split(', ').filter(n => n.trim())}})}
                    className="w-full px-3 py-2 elegant-border rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent text-sm text-charcoal bg-beige-light elegant-transition"
                  />
                </div>
                <div>
                  <label className="text-xs text-charcoal-light">Base Notes</label>
                  <input
                    type="text"
                    placeholder="e.g., Vanilla, Musk"
                    value={formData.notes.base.join(', ')}
                    onChange={(e) => setFormData({...formData, notes: {...formData.notes, base: e.target.value.split(', ').filter(n => n.trim())}})}
                    className="w-full px-3 py-2 elegant-border rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent text-sm text-charcoal bg-beige-light elegant-transition"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
        
        <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-beige-dark mt-6">
          <div className="flex gap-3 flex-1">
            {currentStep > 1 && (
              <Button 
                type="button" 
                onClick={prevStep}
                className="btn-primary px-4 py-3 rounded-lg font-medium flex items-center space-x-2 elegant-transition"
              >
                <FaArrowLeft />
                <span className="hidden sm:inline">Back</span>
              </Button>
            )}
            
            {currentStep < 3 && (
              <Button 
                type="button" 
                onClick={nextStep}
                disabled={!getStepValidation(currentStep)}
                className={`btn-gold px-4 py-3 rounded-lg font-medium flex items-center space-x-2 elegant-transition flex-1 sm:flex-none ${!getStepValidation(currentStep) ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                <span>Continue</span>
                <FaArrowRight />
              </Button>
            )}
          </div>
          
          <div className="flex gap-3">
            <Button 
              type="submit" 
              disabled={loading || !canSubmit()}
              className={`btn-gold px-6 py-3 rounded-lg font-medium flex items-center space-x-2 elegant-transition group ${(loading || !canSubmit()) ? 'cursor-not-allowed opacity-50' : ''}`}
            >
              {loading ? (
                <>
                  <div className="relative">
                    <div className="w-5 h-5 border-2 border-charcoal/30 border-t-charcoal rounded-full animate-spin"></div>
                  </div>
                  <span className="animate-pulse">Saving...</span>
                </>
              ) : (
                <>
                  <FaSave className="transition-transform group-hover:scale-110 group-hover:rotate-12" />
                  <span>{isEditing ? 'Update' : 'Save'}</span>
                </>
              )}
            </Button>
            
            <Button 
              type="button" 
              disabled={loading}
              onClick={onCancel}
              className="bg-beige-dark hover:bg-nude-dark text-charcoal px-4 py-3 rounded-lg font-medium flex items-center space-x-2 elegant-transition"
            >
              <FaTimes />
              <span className="hidden sm:inline">Cancel</span>
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;