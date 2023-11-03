import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { initializeApp } from "firebase/app";
import {
  getReactNativePersistence,
  initializeAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  getFirestore,
  updateDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAaldyn36vnujBZlmxjczAx5Huno6ISm-s",
  authDomain: "onrails-74a56.firebaseapp.com",
  projectId: "onrails-74a56",
  storageBucket: "onrails-74a56.appspot.com",
  messagingSenderId: "169055156772",
  appId: "1:169055156772:web:62df4cf5c7491f788336b1",
  measurementId: "G-39V72MZGXZ",
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// Inicializa o Firebase Authentication com AsyncStorage
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

// Obtem a instância do Firestore do Firebase
const db = getFirestore(app);

export { auth, db, signInWithEmailAndPassword };


export const signOutFirebase = async () => {
  try {
    await auth.signOut();
    console.log("Usuário deslogado com sucesso");
  } catch (error) {
    console.error("Erro ao deslogar:", error);
  }
};

const cadastrarLinha = async (nomeLinha, idLinha) => {
  try {
    const docRef = await addDoc(collection(db, "linhas"), {
      id: idLinha,
      nome: nomeLinha,
    });

    console.log("Linha cadastrada com ID:", docRef.id);
    return true; // Operação de cadastro bem-sucedida
  } catch (error) {
    console.error("Erro ao cadastrar a linha:", error);
    return false; // Ocorreu um erro ao cadastrar a linha
  }
};

const visualizarLinhas = async () => {
  try {
    const linhasRef = collection(db, "linhas"); // Referência para a coleção 'linhas'
    const snapshot = await getDocs(linhasRef); // Obter os documentos da coleção
    const linhas = [];
    snapshot.forEach((doc) => {
      linhas.push({ id: doc.id, ...doc.data() }); // Adiciona os dados de cada linha ao array 'linhas'
    });
    return linhas; // Retorna o array contendo as linhas
  } catch (error) {
    console.error("Erro ao obter linhas:", error);
    return []; // Retorna um array vazio em caso de erro
  }
};

const alterarLinha = async (idLinha, novoNomeLinha) => {
  try {
    const linhasRef = collection(db, "linhas");
    const querySnapshot = await getDocs(linhasRef);

    querySnapshot.forEach(async (doc) => {
      if (doc.data().id === idLinha) {
        await updateDoc(doc.ref, { nome: novoNomeLinha });
      }
    });

    return true; // Operação de alteração bem-sucedida
  } catch (error) {
    console.error("Erro ao alterar a linha:", error);
    return false; // Ocorreu um erro ao alterar a linha
  }
};

const excluirLinha = async (idLinha) => {
  try {
    const linhaRef = doc(db, "linhas", idLinha); // Referência ao documento específico
    await deleteDoc(linhaRef); // Deleta o documento correspondente ao ID da linha
    return true; // Operação de exclusão bem-sucedida
  } catch (error) {
    console.error("Erro ao excluir a linha:", error);
    return false; // Ocorreu um erro ao excluir a linha
  }
};

// Função para cadastrar a estação no Firebase
const cadastrarEstacao = async (nomeEstacao, idEstacao) => {
  try {
    // Aqui você realiza o cadastro da estação no Firestore do Firebase
    await addDoc(collection(db, "estacoes"), {
      nome: nomeEstacao,
      id: idEstacao,
      // Outros dados relacionados à estação, se houver
    });

    // Se o cadastro for bem-sucedido, retorna verdadeiro
    return true;
  } catch (error) {
    // Se ocorrer algum erro, retorna falso
    console.error("Erro ao cadastrar a estação:", error);
    return false;
  }
};

export {
  alterarLinha,
  cadastrarEstacao,
  cadastrarLinha,
  excluirLinha,
  signOut,
  visualizarLinhas,
};

const alterarEstacao = async (idEstacao, novoNomeEstacao) => {
  try {
    const estacoesRef = collection(db, "estacoes");
    const querySnapshot = await getDocs(estacoesRef);

    querySnapshot.forEach(async (doc) => {
      if (doc.data().id === idEstacao) {
        await updateDoc(doc.ref, { nome: novoNomeEstacao });
      }
    });

    return true; // Operação de alteração bem-sucedida
  } catch (error) {
    console.error("Erro ao alterar a estação:", error);
    return false; // Ocorreu um erro ao alterar a estação
  }
};

// Exporta as funções do Firebase
export {
  alterarEstacao,
  alterarSituacao,
  cadastrarSituacao,
  excluirEstacao,
  excluirSituacao,
  visualizarSituacoes,
};

// Função para visualizar as estações no Firebase
export const visualizarEstacoes = async () => {
  const estacoes = [];

  try {
    const estacoesRef = collection(db, "estacoes");
    const snapshot = await getDocs(estacoesRef);

    snapshot.forEach((doc) => {
      estacoes.push({ id: doc.id, ...doc.data() });
    });
  } catch (error) {
    console.error("Erro ao obter as estações:", error);
  }

  return estacoes;
};

const excluirEstacao = async (idEstacao) => {
  try {
    const estacoesRef = collection(db, "estacoes");
    const querySnapshot = await getDocs(estacoesRef);

    querySnapshot.forEach(async (doc) => {
      if (doc.data().id === idEstacao) {
        await deleteDoc(doc.ref);
      }
    });

    return true; // Operação de exclusão bem-sucedida
  } catch (error) {
    console.error("Erro ao excluir a estação:", error);
    return false; // Ocorreu um erro ao excluir a estação
  }
};

const cadastrarSituacao = async (nomeSituacao, idSituacao) => {
  try {
    await addDoc(collection(db, "situacoes"), {
      id: idSituacao,
      nome: nomeSituacao,
      // Outros dados relacionados à situação, se houver
    });

    return true;
  } catch (error) {
    console.error("Erro ao cadastrar a situação:", error);
    return false;
  }
};

const visualizarSituacoes = async () => {
  const situacoes = [];

  try {
    const situacoesRef = collection(db, "situacoes"); // Referência para a coleção 'situacoes'
    const snapshot = await getDocs(situacoesRef); // Obter os documentos da coleção
    snapshot.forEach((doc) => {
      situacoes.push({ id: doc.id, ...doc.data() }); // Adiciona os dados de cada situação ao array 'situacoes'
    });
  } catch (error) {
    console.error("Erro ao obter as situações:", error);
  }

  return situacoes;
};

const excluirSituacao = async (idSituacao) => {
  try {
    const situacoesRef = collection(db, "situacoes");
    const querySnapshot = await getDocs(situacoesRef);

    querySnapshot.forEach(async (doc) => {
      if (doc.data().id === idSituacao) {
        await deleteDoc(doc.ref);
      }
    });

    return true; // Operação de exclusão bem-sucedida
  } catch (error) {
    console.error("Erro ao excluir a situação:", error);
    return false; // Ocorreu um erro ao excluir a situação
  }
};

const alterarSituacao = async (idSituacao, novoNomeSituacao) => {
  try {
    const situacoesRef = collection(db, "situacoes");
    const querySnapshot = await getDocs(situacoesRef);

    querySnapshot.forEach(async (doc) => {
      if (doc.data().id === idSituacao) {
        await updateDoc(doc.ref, { nome: novoNomeSituacao });
      }
    });

    return true; // Operação de alteração bem-sucedida
  } catch (error) {
    console.error("Erro ao alterar a situação:", error);
    return false; // Ocorreu um erro ao alterar a situação
  }
};


