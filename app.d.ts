// 네이티브 윈드 타입 적용
/// <reference types="nativewind/types" />

type WordInfoType =
  | Array
  | {
      title: string;
      message: string;
      resolution: string;
    };

interface MeaningType {
  partOfSpeech: string;
  synonyms: any[];
  antonyms: any[];
  definitions: any[];
}

interface TableRowType {
  word: {
    eng: string;
    kor: string;
    isDone: 'ISDONE' | boolean;
    creatorId?: string;
    day?: number;
    id?: number;
  };
  isDelete: 'DELETE' | 'X';
  is1stRow: boolean;
  setSeeDeleteModal: React.SetStateAction<
    DocumentReference<DocumentData, DocumentData>
  >;
  setWordToDelete: React.SetStateAction<
    DocumentReference<DocumentData, DocumentData>
  >;
  setDocsToDelete: React.SetStateAction<
    DocumentReference<DocumentData, DocumentData>
  >;
  isKorHide: boolean;
  isEngHide: boolean;
}
