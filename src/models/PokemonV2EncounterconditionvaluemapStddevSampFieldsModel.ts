import { Instance } from "mobx-state-tree"
import { PokemonV2EncounterconditionvaluemapStddevSampFieldsModelBase } from "./PokemonV2EncounterconditionvaluemapStddevSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2EncounterconditionvaluemapStddevSampFieldsModel */
export interface PokemonV2EncounterconditionvaluemapStddevSampFieldsModelType extends Instance<typeof PokemonV2EncounterconditionvaluemapStddevSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2EncounterconditionvaluemapStddevSampFieldsModel */
export { selectFromPokemonV2EncounterconditionvaluemapStddevSampFields, pokemonV2EncounterconditionvaluemapStddevSampFieldsModelPrimitives, PokemonV2EncounterconditionvaluemapStddevSampFieldsModelSelector } from "./PokemonV2EncounterconditionvaluemapStddevSampFieldsModel.base"

/**
 * PokemonV2EncounterconditionvaluemapStddevSampFieldsModel
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2EncounterconditionvaluemapStddevSampFieldsModel = PokemonV2EncounterconditionvaluemapStddevSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
