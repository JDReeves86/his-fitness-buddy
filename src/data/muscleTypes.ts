interface Muscle {
    name: string;
  }
  
  interface Dic {
    [key: string | number]: Muscle;
  }
  
  const muscleList: Dic = {
    1: {
      name: "Biceps brachii",
    },
    2: {
      name: "Anterior deltoid",
    },
    3: {
      name: "Serratus anterior",
    },
    4: {
      name: "Pectoralis major",
    },
    5: {
      name: "Triceps brachii",
    },
    6: {
      name: "Rectus abdominis",
    },
    7: {
      name: "Gastrocnemius",
    },
    8: {
      name: "Gluteus maximus",
    },
    9: {
      name: "Trapezius",
    },
    10: {
      name: "Quadriceps femoris",
    },
    11: {
      name: "Biceps femoris",
    },
    12: {
      name: "Latissimus dorsi",
    },
    13: {
      name: "Brachialis",
    },
    14: {
      name: "Obliquus externus abdominis",
    },
    15: {
      name: "Soleus",
    },
  };

  export default muscleList