// src/validation/students.js

import BaseJoi from 'joi';
import JoiObjectId from '@marsup/joi-objectid';

const Joi = BaseJoi.extend(JoiObjectId);

export const createStudentSchema = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  age: Joi.number().integer().min(6).max(16).required(),
  gender: Joi.string().valid('male', 'female', 'other').required(),
  avgMark: Joi.number().min(2).max(12).required(),
  onDuty: Joi.boolean(),
  parentId: Joi.objectId().optional().messages({
    'string.pattern.base': 'Parent ID must be a valid ObjectId',
  }),
});

export const updateStudentSchema = Joi.object({
  name: Joi.string().min(3).max(30),
  email: Joi.string().email(),
  age: Joi.number().integer().min(6).max(16),
  gender: Joi.string().valid('male', 'female', 'other'),
  avgMark: Joi.number().min(2).max(12),
  onDuty: Joi.boolean(),
  parentId: Joi.objectId().optional().messages({
    'string.pattern.base': 'Parent ID must be a valid ObjectId',
  }),
});
