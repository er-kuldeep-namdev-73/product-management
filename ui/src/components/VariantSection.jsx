import React, { useState } from 'react'
import { Plus, Trash2, GripVertical } from 'lucide-react'


const VariantSection = () => {
  const [variants, setVariants] = useState([])

  const addVariant = () => {
    setVariants([
      ...variants,
      {
        id: Math.random().toString(36).substr(2, 9),
        name: '',
        values: ['']
      }
    ])
  }

  const removeVariant = (variantId) => {
    setVariants(variants.filter(v => v.id !== variantId))
  }

  const addValue = (variantId) => {
    setVariants(
      variants.map(variant => {
        if (variant.id === variantId) {
          return {
            ...variant,
            values: [...variant.values, '']
          }
        }
        return variant
      })
    )
  }

  const updateVariantName = (variantId, name) => {
    setVariants(
      variants.map(variant => {
        if (variant.id === variantId) {
          return { ...variant, name }
        }
        return variant
      })
    )
  }

  const updateVariantValue = (
    variantId,
    index,
    value
  ) => {
    setVariants(
      variants.map(variant => {
        if (variant.id === variantId) {
          const newValues = [...variant.values]
          newValues[index] = value
          return { ...variant, values: newValues }
        }
        return variant
      })
    )
  }

  return (
    <div className='space-y-4'>
      <div className='flex justify-between items-center'>
        <h2 className='text-lg font-semibold'>Variants</h2>
      </div>

      <div className='space-y-4'>
        {variants.map(variant => (
          <div key={variant.id} className='border rounded-lg p-4 bg-white'>
            <div className='flex items-center gap-2 mb-2'>
              <GripVertical className='text-gray-400' size={20} />
              <div className='w-full'>
                <label className='block text-sm font-medium text-gray-700 mb-1'>
                  Option name
                </label>
                <input
                  type='text'
                  placeholder='Option name (e.g., Size, Color, Material)'
                  value={variant.name}
                  onChange={e => updateVariantName(variant.id, e.target.value)}
                  className='flex-1 w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                />
              </div>
              <button
                onClick={() => removeVariant(variant.id)}
                className='text-red-500 hover:text-red-700 p-2'
              >
                <Trash2 size={20} />
              </button>
            </div>

            <div className='space-y-2'>
              {variant.values.map((value, index) => (
                <div key={index} className='flex items-center gap-2'>
                  <GripVertical className='text-gray-400' size={20} />
                  <div className='w-full'>
                  {index==0 && <label className='block text-sm font-medium text-gray-700 mb-1'>
                    Option Value
                  </label>}
                  <input
                    type='text'
                    placeholder='Enter value'
                    value={value}
                    onChange={e =>
                      updateVariantValue(variant.id, index, e.target.value)
                    }
                    className='flex-1 w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                  />
                  </div>
                  {index === variant.values.length - 1 && (
                    <button
                      onClick={() => addValue(variant.id)}
                      className='focus:bg-blue-300 p-3 hover:bg-blue-300 rounded-lg text-blue-600 hover:text-blue-800 flex items-center gap-1'
                    >
                      <Plus size={16} />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={addVariant}
        className='w-full py-2 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-gray-400 hover:text-gray-700 flex items-center justify-center gap-2'
      >
        <Plus size={20} /> Add another option
      </button>
    </div>
  )
}

export default VariantSection
