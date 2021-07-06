import { Instance } from "mobx-state-tree"
import { PokemonV2EncounterconditionvaluenameMinFieldsModelBase } from "./PokemonV2EncounterconditionvaluenameMinFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2EncounterconditionvaluenameMinFieldsModel */
export interface PokemonV2EncounterconditionvaluenameMinFieldsModelType extends Instance<typeof PokemonV2EncounterconditionvaluenameMinFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2EncounterconditionvaluenameMinFieldsModel */
export { selectFromPokemonV2EncounterconditionvaluenameMinFields, pokemonV2EncounterconditionvaluenameMinFieldsModelPrimitives, PokemonV2EncounterconditionvaluenameMinFieldsModelSelector } from "./PokemonV2EncounterconditionvaluenameMinFieldsModel.base"

/**
 * PokemonV2EncounterconditionvaluenameMinFieldsModel
 *
 * aggregate min on columns
 */
export const PokemonV2EncounterconditionvaluenameMinFieldsModel = PokemonV2EncounterconditionvaluenameMinFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
