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
    author_last_name:   {
        type:   'string',
        required:    true
    },
    first_name: {
        type:   'string',
        notNull:    true     
    },
    date_published: {
        type:   'string',
        maxLength:  10   
    },
    other_titles:   {
        type:   'string',
        maxLength:  60
    }
  },
  schema: true
};

