import { writable } from 'svelte/store';
// readable, derived, get 등이 더 있음

// export let storeName = '';  // 이렇게 하면 외부에서 수정할 수 없음
export let storeName = writable(''); // ''로 초기화된 store 객체가 반환됨
// store 객체에는 set, subscribe, update 메서드가 있음