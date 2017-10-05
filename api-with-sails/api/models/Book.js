/**
 * Book.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    title:  {
        type:   'string',
        notNull:    true,
        maxLength:  30
    },
    categories: {
        type:   'string',
        maxLength:  true
    },
    authLName:   {
        type:   'string',
        required:    true
    },
    authFName: {
        type:   'string',
        notNull:    true     
    },
    datePublished: {
        type:   'string',
        maxLength:  10   
    },
    otherTitles:   {
        type:   'string',
        maxLength:  60
    }
  },
  schema: true
};

