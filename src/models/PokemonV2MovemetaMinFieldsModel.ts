import { Instance } from "mobx-state-tree"
import { PokemonV2MovemetaMinFieldsModelBase } from "./PokemonV2MovemetaMinFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovemetaMinFieldsModel */
export interface PokemonV2MovemetaMinFieldsModelType extends Instance<typeof PokemonV2MovemetaMinFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovemetaMinFieldsModel */
export { selectFromPokemonV2MovemetaMinFields, pokemonV2MovemetaMinFieldsModelPrimitives, PokemonV2MovemetaMinFieldsModelSelector } from "./PokemonV2MovemetaMinFieldsModel.base"

/**
 * PokemonV2MovemetaMinFieldsModel
 *
 * aggregate min on columns
 */
export const PokemonV2MovemetaMinFieldsModel = PokemonV2MovemetaMinFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
