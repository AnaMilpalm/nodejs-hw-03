// import express from 'express';

// import { getContacts, getContact } from '../controllers/contactsController.js';

// const router = express.Router();

// router.get('/', getContacts);

// router.get('/:contactId', getContact);

// export default router;
import { Router } from 'express';

import {
  getContactsController,
  getContactByIdController,
} from '../controllers/contacts.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const router = Router();

router.get('/contacts', ctrlWrapper(getContactsController));
router.get('/contacts/:contactId', ctrlWrapper(getContactByIdController));

export default router;
