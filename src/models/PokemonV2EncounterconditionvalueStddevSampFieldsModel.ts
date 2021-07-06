import { Instance } from "mobx-state-tree"
import { PokemonV2EncounterconditionvalueStddevSampFieldsModelBase } from "./PokemonV2EncounterconditionvalueStddevSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2EncounterconditionvalueStddevSampFieldsModel */
export interface PokemonV2EncounterconditionvalueStddevSampFieldsModelType extends Instance<typeof PokemonV2EncounterconditionvalueStddevSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2EncounterconditionvalueStddevSampFieldsModel */
export { selectFromPokemonV2EncounterconditionvalueStddevSampFields, pokemonV2EncounterconditionvalueStddevSampFieldsModelPrimitives, PokemonV2EncounterconditionvalueStddevSampFieldsModelSelector } from "./PokemonV2EncounterconditionvalueStddevSampFieldsModel.base"

/**
 * PokemonV2EncounterconditionvalueStddevSampFieldsModel
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2EncounterconditionvalueStddevSampFieldsModel = PokemonV2EncounterconditionvalueStddevSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
