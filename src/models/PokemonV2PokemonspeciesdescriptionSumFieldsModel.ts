import { Instance } from "mobx-state-tree"
import { PokemonV2PokemonspeciesdescriptionSumFieldsModelBase } from "./PokemonV2PokemonspeciesdescriptionSumFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PokemonspeciesdescriptionSumFieldsModel */
export interface PokemonV2PokemonspeciesdescriptionSumFieldsModelType extends Instance<typeof PokemonV2PokemonspeciesdescriptionSumFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PokemonspeciesdescriptionSumFieldsModel */
export { selectFromPokemonV2PokemonspeciesdescriptionSumFields, pokemonV2PokemonspeciesdescriptionSumFieldsModelPrimitives, PokemonV2PokemonspeciesdescriptionSumFieldsModelSelector } from "./PokemonV2PokemonspeciesdescriptionSumFieldsModel.base"

/**
 * PokemonV2PokemonspeciesdescriptionSumFieldsModel
 *
 * aggregate sum on columns
 */
export const PokemonV2PokemonspeciesdescriptionSumFieldsModel = PokemonV2PokemonspeciesdescriptionSumFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
