import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { initializeApp } from "firebase/app";
import {
  getReactNativePersistence,
  initializeAuth,
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword as firebaseCreateUserWithEmailAndPassword, sendPasswordResetEmail
} from "firebase/auth";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  getFirestore,
  updateDoc,
  setDoc,
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

export const createUserWithEmailAndPassword = async (email, password) => {
  try {
    const userCredential = await firebaseCreateUserWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    throw error;
  }
};

const handleResetPassword = (email) => {
  return new Promise((resolve, reject) => {
    if (email) {
      sendPasswordResetEmail(auth, email)
        .then(() => {
          console.log("Email enviado. Verifique sua caixa de entrada para redefinir sua senha.");
          resolve(); // Resolva a Promise em caso de sucesso
        })
        .catch((error) => {
          console.error("Erro ao enviar email:", error);
          reject(error); // Rejeite a Promise em caso de erro
        });
    } else {
      const error = new Error("Por favor, insira um endereço de email válido.");
      console.error(error);
      reject(error);
    }
  });
};

export { handleResetPassword };

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
const cadastrarEstacao = async (nomeEstacao, idEstacao, nomeLinha) => {
  try {
    // Aqui você realiza o cadastro da estação no Firestore do Firebase
    await addDoc(collection(db, "estacoes"), {
      nome: nomeEstacao,
      id: idEstacao,
      nomeLinha: nomeLinha,
      // Outros dados relacionados à estação, se houver
    });

    // Agora, associar a estação à linha correspondente
    // Adicionando a referência da estação à coleção de linhas
    await setDoc(doc(db, "linhas", nomeLinha, "estacoes", nomeEstacao), {
      // Outros dados relacionados à associação entre a estação e a linha, se necessário
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
const visualizarEstacoes = async () => {
  const estacoes = [];

  try {
    const estacoesRef = collection(db, 'estacoes');
    const snapshot = await getDocs(estacoesRef);

    snapshot.forEach((doc) => {
      const estacao = doc.data();
      const id = doc.id; // Este é o ID do documento
      const estacaoId = estacao.id; // Este é o campo 'id' dentro do documento

      estacoes.push({
        id: estacaoId,
        nome: estacao.nome || 'Nome não encontrado',
        nomeLinha: estacao.nomeLinha || 'Nome da linha não encontrado',
        // Outros dados da estação, se houver
      });
    });
  } catch (error) {
    console.error('Erro ao obter as estações:', error);
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

const adicionarRelato = async (relato) => {
  try {
    // Adicionando um relato a uma coleção específica chamada "relatos"
    const relatosCollection = collection(db, "relatos");

    // Adicionando o documento do relato à coleção "relatos"
    await addDoc(relatosCollection, relato);

    console.log("Relato adicionado com sucesso!");
    return true; // Retorna verdadeiro se a adição for bem-sucedida
  } catch (error) {
    console.error("Erro ao adicionar o relato:", error);
    return false; // Retorna falso se ocorrer algum erro
  }
};

const verificarRelatosSemelhantes = async (selectedOption1, selectedOption2, selectedOption3) => {
  try {
    const relatosRef = collection(db, "relatos");
    const querySnapshot = await getDocs(relatosRef);

    let count = 0;

    querySnapshot.forEach((doc) => {
      const relato = doc.data();
      if (
        relato.linha === selectedOption1 &&
        relato.estacao === selectedOption2 &&
        relato.situacao === selectedOption3
      ) {
        count++;
      }
    });

    return count;
  } catch (error) {
    console.error("Erro ao verificar relatos semelhantes:", error);
    return 0;
  }
};


const adicionarNaColecaoNotificacoes = async (notificacao) => {
  try {
    const notificacaoRef = collection(db, "notificacao"); // Corrigido para 'notificacao' (coleção correta)

    // Adiciona um documento na coleção 'notificacao' (corrigido para 'notificacao' para corresponder à coleção)
    await addDoc(notificacaoRef, notificacao); // Usando 'addDoc' para adicionar um documento

    // Se o documento for adicionado com sucesso, retorna true
    return true;
  } catch (error) {
    console.error('Erro ao adicionar notificação na coleção Notificacoes:', error);
    // Se ocorrer um erro, retorna false ou lança uma exceção, dependendo do tratamento desejado
    return false;
  }
};

const visualizarNotificacoes = async () => {
  const notificacoes = [];

  try {
    const notificacaosRef = collection(db, "notificacao"); 
    const snapshot = await getDocs(notificacaosRef); 
    snapshot.forEach((doc) => {
      const { linha, estacao, situacao } = doc.data(); 
      notificacoes.push({ linha, estacao, situacao }); 
    });
  } catch (error) {
    console.error("Erro ao obter as situações:", error);
  }

  return notificacoes;
};

const visualizarRelatoPassageiro = async () => {
  const relato = [];

  try {
    const relatoRef = collection(db, "relatos");
    const snapshot = await getDocs(relatoRef);
    snapshot.forEach((doc) => {
      const { linha, estacao, situacao } = doc.data();
      relato.push({ linha, estacao, situacao });
    });
  } catch (error) {
    console.error("Erro ao obter os relatos:", error);
  }

  return relato;
};



export { visualizarEstacoes, adicionarRelato, verificarRelatosSemelhantes, visualizarNotificacoes, adicionarNaColecaoNotificacoes, visualizarRelatoPassageiro };


