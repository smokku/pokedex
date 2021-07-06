import { Instance } from "mobx-state-tree"
import { PokemonV2ItemMinFieldsModelBase } from "./PokemonV2ItemMinFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItemMinFieldsModel */
export interface PokemonV2ItemMinFieldsModelType extends Instance<typeof PokemonV2ItemMinFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemMinFieldsModel */
export { selectFromPokemonV2ItemMinFields, pokemonV2ItemMinFieldsModelPrimitives, PokemonV2ItemMinFieldsModelSelector } from "./PokemonV2ItemMinFieldsModel.base"

/**
 * PokemonV2ItemMinFieldsModel
 *
 * aggregate min on columns
 */
export const PokemonV2ItemMinFieldsModel = PokemonV2ItemMinFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
