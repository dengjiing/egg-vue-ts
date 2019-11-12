// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAboutAbout from '../../../app/controller/about/about';
import ExportAdminAdmin from '../../../app/controller/admin/admin';
import ExportCategoryCategory from '../../../app/controller/category/category';
import ExportIndexIndex from '../../../app/controller/index/index';

declare module 'egg' {
  interface IController {
    about: {
      about: ExportAboutAbout;
    }
    admin: {
      admin: ExportAdminAdmin;
    }
    category: {
      category: ExportCategoryCategory;
    }
    index: {
      index: ExportIndexIndex;
    }
  }
}
