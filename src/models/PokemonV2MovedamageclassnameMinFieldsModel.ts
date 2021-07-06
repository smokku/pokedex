import { Instance } from "mobx-state-tree"
import { PokemonV2MovedamageclassnameMinFieldsModelBase } from "./PokemonV2MovedamageclassnameMinFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovedamageclassnameMinFieldsModel */
export interface PokemonV2MovedamageclassnameMinFieldsModelType extends Instance<typeof PokemonV2MovedamageclassnameMinFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovedamageclassnameMinFieldsModel */
export { selectFromPokemonV2MovedamageclassnameMinFields, pokemonV2MovedamageclassnameMinFieldsModelPrimitives, PokemonV2MovedamageclassnameMinFieldsModelSelector } from "./PokemonV2MovedamageclassnameMinFieldsModel.base"

/**
 * PokemonV2MovedamageclassnameMinFieldsModel
 *
 * aggregate min on columns
 */
export const PokemonV2MovedamageclassnameMinFieldsModel = PokemonV2MovedamageclassnameMinFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
