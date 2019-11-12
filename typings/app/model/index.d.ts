// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportArticle from '../../../app/model/article';
import ExportArtilcedetail from '../../../app/model/artilcedetail';
import ExportUser from '../../../app/model/user';

declare module 'egg' {
  interface IModel {
    Article: ReturnType<typeof ExportArticle>;
    Artilcedetail: ReturnType<typeof ExportArtilcedetail>;
    User: ReturnType<typeof ExportUser>;
  }
}
