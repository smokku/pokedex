import { Instance } from "mobx-state-tree"
import { PokemonV2EncounterconditionvaluemapStddevFieldsModelBase } from "./PokemonV2EncounterconditionvaluemapStddevFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2EncounterconditionvaluemapStddevFieldsModel */
export interface PokemonV2EncounterconditionvaluemapStddevFieldsModelType extends Instance<typeof PokemonV2EncounterconditionvaluemapStddevFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2EncounterconditionvaluemapStddevFieldsModel */
export { selectFromPokemonV2EncounterconditionvaluemapStddevFields, pokemonV2EncounterconditionvaluemapStddevFieldsModelPrimitives, PokemonV2EncounterconditionvaluemapStddevFieldsModelSelector } from "./PokemonV2EncounterconditionvaluemapStddevFieldsModel.base"

/**
 * PokemonV2EncounterconditionvaluemapStddevFieldsModel
 *
 * aggregate stddev on columns
 */
export const PokemonV2EncounterconditionvaluemapStddevFieldsModel = PokemonV2EncounterconditionvaluemapStddevFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
