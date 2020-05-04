const Survey = {
    "0": {
        "name": "Таблица настроения",
        "description": "Заполните таблицу в соответствии с вашим настроением в течение дня.",
        "questions": {
            "1": {
                "text": "Оцените ваше настроение по шкале от -3 до +3\n(поставьте две галочки, если в течение дня вы испытывали и хорошее и иплохое настроение):",
                "type": "checkbox",
                "answers": {
                    "1": {
                        "text": "-3"
                    },
                    "2": {
                        "text": "-2"
                    },
                    "3": {
                        "text": "-1"
                    },
                    "4": {
                        "text": "Норма"
                    },
                    "5": {
                        "text": "1"
                    },
                    "6": {
                        "text": "2"
                    },
                    "7": {
                        "text": "3"
                    }
                }
            },
            "2": {
                "text": "Сколько часов вы спали?",
                "type": "textarea",
                "answers": {
                    "1": {
                        "text": "Напишите количество часо сна"
                    }
                }
            },
            "3": {
                "text": "Ваш уровень тревоги",
                "type": "radio",
                "answers": {
                    "1": {
                        "text": "0"
                    },
                    "2": {
                        "text": "1"
                    },
                    "3": {
                        "text": "2"
                    },
                    "4": {
                        "text": "3"
                    }
                }
            },
            "4": {
                "text": "Ваш уровень раздражительности",
                "type": "radio",
                "answers": {
                    "1": {
                        "text": "0"
                    },
                    "2": {
                        "text": "1"
                    },
                    "3": {
                        "text": "2"
                    },
                    "4": {
                        "text": "3"
                    }
                }
            },
            "5": {
                "text": "Какие медикаменты вы сегодня принимали?",
                "type": "textarea",
                "answers": {
                    "1": {
                        "text": "Напишите список выпитых сегодня таблеток"
                    }
                }
            },
            "6": {
                "text": "Принимали ли вы сегодня алкоголь?",
                "type": "radio",
                "answers": {
                    "1": {
                        "text": "Да"
                    },
                    "2": {
                        "text": "Нет"
                    },
                }
            },
            "7": {
                "text": "Принимали ли вы сегодня наркотики?",
                "type": "radio",
                "answers": {
                    "1": {
                        "text": "Да"
                    },
                    "2": {
                        "text": "Нет"
                    },
                }
            }
        },
        aggregate(someData) {
            // Как-то аггрегирует данные
        },
        "decoding": ""
    },
    "1": {
        "name": "Шкала Бартела",
        "description": "Шкала оценки возможности выполнения элементарной деятельности",
        "questions": {
            "1": {
                "text": "Прием пищи",
                "type": "radio",
                "answers": {
                    "1": {
                        "text": "Не нуждаюсь в помощи, способен самостоятельно пользоваться столовыми приборами"
                    },
                    "2": {
                        "text": "Частично нуждаюсь в помощи"
                    },
                    "3": {
                        "text": "Полностью зависим от окружающих"
                    }
                }
            },
            "2": {
                "text": "Умывание лицца, причесывание, чистка зубов, бритье",
                "type": "radio",
                "answers": {
                    "1": {
                        "text": "Не нуждаюсь в помощи"
                    },
                    "2": {
                        "text": "Нуждаюсь в помощи"
                    },
                }
            },
            "3": {
                "text": "Одевание",
                "type": "radio",
                "answers": {
                    "1": {
                        "text": "Не нуждаюсь в помощи"
                    },
                    "2": {
                        "text": "Частично нуждаюсь в помощи, например приодевании обуви, застегивании пуговиц"
                    },
                    "3": {
                        "text": "ПОлностью нуждаюсь в посторонней помощи"
                    }
                }
            },
            "4": {
                "text": "Прием ванны",
                "type": "radio",
                "answers": {
                    "1": {
                        "text": "Принимаю ванну без посторонней помощи"
                    },
                    "2": {
                        "text": "Нуждаюсь в посторонней помощи"
                    },
                }
            },
            "5": {
                "text": "Контроль тазовых функций (мочеиспускание, дефекация)",
                "type": "radio",
                "answers": {
                    "1": {
                        "text": "Не нуждаюсь в помощи"
                    },
                    "2": {
                        "text": "Частично нуждаюсь в помощи (при использовании клизмы, свечей, каттетера)"
                    },
                    "3": {
                        "text": "Постоянно нуждаюсь в помощи в связи с грубым нарушением тазовых функций"
                    }
                }
            },
            "6": {
                "text": "Посещение туалета",
                "type": "radio",
                "answers": {
                    "1": {
                        "text": "Не нуждаюсь в помощи"
                    },
                    "2": {
                        "text": "Частично нуждаюсь в помощи (удержание равновесия, использование туалетной бумаги, снятие и одевание брюк"
                    },
                    "3": {
                        "text": "Нуждаюсь в использовании судна, утки"
                    }
                }
            },
            "7": {
                "text": "Вставание с постели",
                "type": "radio",
                "answers": {
                    "1": {
                        "text": "Не нуждаюсь в помощи"
                    },
                    "2": {
                        "text": "Нуждаюсь в наблюдении или минимаьной поддержке"
                    },
                    "3": {
                        "text": "Могу сесть в постели, но для того, чтобы встать, нужна существенная поддержка"
                    },
                    "4": {
                        "text": "Не способен встать с постели даже с посторонней помощью"
                    }
                }
            },
            "8": {
                "text": "Переход с кровати на стул",
                "type": "radio",
                "answers": {
                    "1": {
                        "text": "Перехожу самостоятельно"
                    },
                    "2": {
                        "text": "Нуждаюсь при переходе в минимальной помощи (или наблюдении)"
                    },
                    "3": {
                        "text": "Могу сидеть, однако нуждаюсь в помощи при переходе"
                    },
                    "4": {
                        "text": "Не встаю с постели"
                    }
                }
            },
            "9": {
                "text": "Передвижение",
                "type": "radio",
                "answers": {
                    "1": {
                        "text": "Могу без посторонней помощи пердвигаться на расстояние до 500 м."
                    },
                    "2": {
                        "text": "Могу передвигаться с постороней помощью в пределах 500 м."
                    },
                    "3": {
                        "text": "Могу передвигаться с помощью инвалидной коляски"
                    },
                    "4": {
                        "text": "Не способен к пеердвижению"
                    }
                }
            },
            "10": {
                "text": "Подъем по лестнице",
                "type": "radio",
                "answers": {
                    "1": {
                        "text": "Не нуждаюсь в помощи"
                    },
                    "2": {
                        "text": "Нуждаюсь в наблюдении или поддержке"
                    },
                    "3": {
                        "text": "Не способен подниматься по лестнице даже с поддержкой"
                    },
                }
            },
        },
        aggregate(someData) {
            let weights = {
                "1": {
                    "1": 10,
                    "2": 5,
                    "3": 0
                },
                "2": {
                    "1": 5,
                    "2": 0
                },
                "3": {
                    "1": 10,
                    "2": 5,
                    "3": 0
                },
                "4": {
                    "1": 5,
                    "2": 0
                },
                "5": {
                    "1": 20,
                    "2": 10,
                    "3": 0
                },
                "6": {
                    "1": 10,
                    "2": 5,
                    "3": 0
                },
                "7": {
                    "1": 15,
                    "2": 10,
                    "3": 5,
                    "4": 0
                },
                "8": {
                    "1": 15,
                    "2": 10,
                    "3": 5,
                    "4": 0
                },
                "9": {
                    "1": 15,
                    "2": 10,
                    "3": 5,
                    "4": 0
                },
                "10": {
                    "1": 10,
                    "2": 5,
                    "3": 0
                },
            };

            let result = 0;
            for (let answer in someData) {
                result = result + weights[answer][someData[answer]]
            }
            return result
        },
        "decoding": ""
    },

    "2": {
        "name": "Шкала по Norton",
        "description": "Шкала оценки возможности выполнения элементарной деятельности",
        "questions": {
          "1": {
            "text": "Общее состояние",
            "type": "radio",
            "answers": {
              "1": {
                "text": "Хорошее"
              },
              "2": {
                "text": "Удовлетворительное"
              },
              "3": {
                "text": "Тяжелое"
              },
              "4": {
                "text": "Крайне тяжелое"
              }
            }
          },
          "2": {
            "text": "Психологическое состояние",
            "type": "radio",
            "answers": {
              "1": {
                "text": "Настороженное"
              },
              "2": {
                "text": "Апатия"
              },
              "3": {
                "text": "Дезориентированность"
              },
              "4": {
                "text": "Загруженность"
              }
            }
          },
          "3": {
            "text": "Общее состояние",
            "type": "radio",
            "answers": {
              "1": {
                "text": "Ходьба"
              },
              "2": {
                "text": "С посторонней помощью "
              },
              "3": {
                "text": "Сидение в коляске"
              },
              "4": {
                "text": "Лежание в коляске"
              }
            }
          },
          "4": {
            "text": "Подвижность",
            "type": "radio",
            "answers": {
              "1": {
                "text": "Общая, хорошая"
              },
              "2": {
                "text": "Несколько ограничена"
              },
              "3": {
                "text": "Сильно ограничена"
              },
              "4": {
                "text": "Обездвиженность"
              }
            }
          },
          "5": {
            "text": "Контроль за функциями таза",
            "type": "radio",
            "answers": {
              "1": {
                "text": "Недержание отсутствует"
              },
              "2": {
                "text": "Незначительное недержание"
              },
              "3": {
                "text": "Только мочи"
              },
              "4": {
                "text": "Двойное недержание"
              }
            }
          },
        },

      aggregate(someData) {
        let weights = {
          "1": {
            "1": 4,
            "2": 3,
            "3": 2,
            "4": 1
          },
          "2": {
            "1": 4,
            "2": 3,
            "3": 2,
            "4": 1
          },
          "3": {
            "1": 4,
            "2": 3,
            "3": 2,
            "4": 1
          },
          "4": {
            "1": 4,
            "2": 3,
            "3": 2,
            "4": 1
          },
          "5": {
            "1": 4,
            "2": 3,
            "3": 2,
            "4": 1
          },
        };

        let result = 0;
        for (let answer in someData) {
          result = result + weights[answer][someData[answer]]
        }
        return result
      },
        "decoding": "Если сумма баллов меньше 12 - больной в зоне высокого риска.\n" +
            "Если сумма баллов между 12 и 14 - больной в зоне умеренногориска\n" +
            "Если сумма баллов больше 14 - риска нет"
    }


};


exports.Survey = Survey;