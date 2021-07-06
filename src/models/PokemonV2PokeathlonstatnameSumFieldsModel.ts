import { Instance } from "mobx-state-tree"
import { PokemonV2PokeathlonstatnameSumFieldsModelBase } from "./PokemonV2PokeathlonstatnameSumFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokeathlonstatnameSumFieldsModel */
export interface PokemonV2PokeathlonstatnameSumFieldsModelType extends Instance<typeof PokemonV2PokeathlonstatnameSumFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokeathlonstatnameSumFieldsModel */
export { selectFromPokemonV2PokeathlonstatnameSumFields, pokemonV2PokeathlonstatnameSumFieldsModelPrimitives, PokemonV2PokeathlonstatnameSumFieldsModelSelector } from "./PokemonV2PokeathlonstatnameSumFieldsModel.base"

/**
 * PokemonV2PokeathlonstatnameSumFieldsModel
 *
 * aggregate sum on columns
 */
export const PokemonV2PokeathlonstatnameSumFieldsModel = PokemonV2PokeathlonstatnameSumFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
