import { Instance } from "mobx-state-tree"
import { PokemonV2MovedamageclassMinFieldsModelBase } from "./PokemonV2MovedamageclassMinFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovedamageclassMinFieldsModel */
export interface PokemonV2MovedamageclassMinFieldsModelType extends Instance<typeof PokemonV2MovedamageclassMinFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovedamageclassMinFieldsModel */
export { selectFromPokemonV2MovedamageclassMinFields, pokemonV2MovedamageclassMinFieldsModelPrimitives, PokemonV2MovedamageclassMinFieldsModelSelector } from "./PokemonV2MovedamageclassMinFieldsModel.base"

/**
 * PokemonV2MovedamageclassMinFieldsModel
 *
 * aggregate min on columns
 */
export const PokemonV2MovedamageclassMinFieldsModel = PokemonV2MovedamageclassMinFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
