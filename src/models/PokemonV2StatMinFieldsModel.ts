import { Instance } from "mobx-state-tree"
import { PokemonV2StatMinFieldsModelBase } from "./PokemonV2StatMinFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2StatMinFieldsModel */
export interface PokemonV2StatMinFieldsModelType extends Instance<typeof PokemonV2StatMinFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2StatMinFieldsModel */
export { selectFromPokemonV2StatMinFields, pokemonV2StatMinFieldsModelPrimitives, PokemonV2StatMinFieldsModelSelector } from "./PokemonV2StatMinFieldsModel.base"

/**
 * PokemonV2StatMinFieldsModel
 *
 * aggregate min on columns
 */
export const PokemonV2StatMinFieldsModel = PokemonV2StatMinFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
