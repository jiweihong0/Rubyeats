import { onMounted, reactive, ref } from "vue"

const key = 'recommandation'

type Tag = string

export function setRecommandation(tags: Tag[]): void {
  const localStorage = window.localStorage
  localStorage.setItem(key, JSON.stringify(tags))
}

type Recommandation = {
  tags: Tag[]
}

export default function getRecommandation(): Recommandation {
  const localStorage = window.localStorage;
  const data = reactive<Recommandation>({
    tags: JSON.parse(localStorage.getItem(key) as  string) as Tag[] || []
  });
  
  return data;
}