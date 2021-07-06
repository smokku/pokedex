import { Instance } from "mobx-state-tree"
import { PokemonV2MovedamageclassnameAvgFieldsModelBase } from "./PokemonV2MovedamageclassnameAvgFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovedamageclassnameAvgFieldsModel */
export interface PokemonV2MovedamageclassnameAvgFieldsModelType extends Instance<typeof PokemonV2MovedamageclassnameAvgFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovedamageclassnameAvgFieldsModel */
export { selectFromPokemonV2MovedamageclassnameAvgFields, pokemonV2MovedamageclassnameAvgFieldsModelPrimitives, PokemonV2MovedamageclassnameAvgFieldsModelSelector } from "./PokemonV2MovedamageclassnameAvgFieldsModel.base"

/**
 * PokemonV2MovedamageclassnameAvgFieldsModel
 *
 * aggregate avg on columns
 */
export const PokemonV2MovedamageclassnameAvgFieldsModel = PokemonV2MovedamageclassnameAvgFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
