import { Instance } from "mobx-state-tree"
import { PokemonV2EncounterconditionvaluenameAvgFieldsModelBase } from "./PokemonV2EncounterconditionvaluenameAvgFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2EncounterconditionvaluenameAvgFieldsModel */
export interface PokemonV2EncounterconditionvaluenameAvgFieldsModelType extends Instance<typeof PokemonV2EncounterconditionvaluenameAvgFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2EncounterconditionvaluenameAvgFieldsModel */
export { selectFromPokemonV2EncounterconditionvaluenameAvgFields, pokemonV2EncounterconditionvaluenameAvgFieldsModelPrimitives, PokemonV2EncounterconditionvaluenameAvgFieldsModelSelector } from "./PokemonV2EncounterconditionvaluenameAvgFieldsModel.base"

/**
 * PokemonV2EncounterconditionvaluenameAvgFieldsModel
 *
 * aggregate avg on columns
 */
export const PokemonV2EncounterconditionvaluenameAvgFieldsModel = PokemonV2EncounterconditionvaluenameAvgFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
