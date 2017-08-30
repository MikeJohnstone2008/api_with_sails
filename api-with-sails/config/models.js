/**
 * Default model configuration
 * (sails.config.models)
 *
 * Unless you override them, the following properties will be included
 * in each of your models.
 *
 * For more info on Sails models, see:
 * http://sailsjs.org/#!/documentation/concepts/ORM
 */

module.exports.models = {

  attributes: {
    title:  {
      type: 'string',
      notNull: true,
    },
    category: {
      type: 'array',
    },
    authFName:  {
      type: 'string',
      required: true,
    },
    datePublished:  {
      type: 'integer',
      maxLength: 4,
      numeric:  true,
    },
    authLName:  {
      type: 'string',
      required: true,
    },
    otherTitles:  {
      type: 'array',
      notNull: true,
    },
  },
  // module.exports = {
  //
  //   attributes: {
  //     firstName:  {
  //       type: 'string',
  //       required:  true
  //     },
  //     lastName: {
  //       type: 'string',
  //       required:  true
  //     },
  //     email:  {
  //       type: 'email',
  //       unique: true,
  //       required:  true
  //     }
  //   },
  //   schema: true
  // };

  /***************************************************************************
  *                                                                          *
  * Your app's default connection. i.e. the name of one of your app's        *
  * connections (see `config/connections.js`)                                *
  *                                                                          *
  ***************************************************************************/
  // connection: 'localDiskDb',

  /***************************************************************************
  *                                                                          *
  * How and whether Sails will attempt to automatically rebuild the          *
  * tables/collections/etc. in your schema.                                  *
  *                                                                          *
  * See http://sailsjs.org/#!/documentation/concepts/ORM/model-settings.html  *
  *                                                                          *
  ***************************************************************************/
  migrate: 'alter',
  schema: true

};
