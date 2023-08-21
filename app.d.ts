// 네이티브 윈드 타입 적용
/// <reference types="nativewind/types" />

type wordInfoType =
  | Array
  | {
      title: string;
      message: string;
      resolution: string;
    };

interface meaningType {
  partOfSpeech: string;
  synonyms: any[];
  antonyms: any[];
  definitions: any[];
}
