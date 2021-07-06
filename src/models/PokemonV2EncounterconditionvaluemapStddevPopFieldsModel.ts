import { Instance } from "mobx-state-tree"
import { PokemonV2EncounterconditionvaluemapStddevPopFieldsModelBase } from "./PokemonV2EncounterconditionvaluemapStddevPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2EncounterconditionvaluemapStddevPopFieldsModel */
export interface PokemonV2EncounterconditionvaluemapStddevPopFieldsModelType extends Instance<typeof PokemonV2EncounterconditionvaluemapStddevPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2EncounterconditionvaluemapStddevPopFieldsModel */
export { selectFromPokemonV2EncounterconditionvaluemapStddevPopFields, pokemonV2EncounterconditionvaluemapStddevPopFieldsModelPrimitives, PokemonV2EncounterconditionvaluemapStddevPopFieldsModelSelector } from "./PokemonV2EncounterconditionvaluemapStddevPopFieldsModel.base"

/**
 * PokemonV2EncounterconditionvaluemapStddevPopFieldsModel
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2EncounterconditionvaluemapStddevPopFieldsModel = PokemonV2EncounterconditionvaluemapStddevPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
