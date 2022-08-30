const { default: mongoose } = require('mongoose');
const moongose = require('mongoose');

const MatchScheme = new mongoose.Schema(
    {
        matchVersus: {
            type: String,
            required: true
        },
        resultadoLocal: {
            type: Boolean,
            default: false
        },
        resultadoEmpate: {
            type: Boolean,
            default: false
        },
        resultadoVisitante: {
            type: Boolean,
            default: false
        } //En el front se pueden usar los valores de local, visitante y empate y usar los inputs o botones con el value por ej;
          // const [empate, SetEmpate] = useState(false);
          // <input value={empate} />
    }
)

module.exports = mongoose.model('match', MatchScheme)