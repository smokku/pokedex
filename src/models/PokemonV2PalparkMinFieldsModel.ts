import { Instance } from "mobx-state-tree"
import { PokemonV2PalparkMinFieldsModelBase } from "./PokemonV2PalparkMinFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2PalparkMinFieldsModel */
export interface PokemonV2PalparkMinFieldsModelType extends Instance<typeof PokemonV2PalparkMinFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2PalparkMinFieldsModel */
export { selectFromPokemonV2PalparkMinFields, pokemonV2PalparkMinFieldsModelPrimitives, PokemonV2PalparkMinFieldsModelSelector } from "./PokemonV2PalparkMinFieldsModel.base"

/**
 * PokemonV2PalparkMinFieldsModel
 *
 * aggregate min on columns
 */
export const PokemonV2PalparkMinFieldsModel = PokemonV2PalparkMinFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
