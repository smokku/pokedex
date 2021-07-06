import { Instance } from "mobx-state-tree"
import { PokemonV2MovedamageclassdescriptionAvgFieldsModelBase } from "./PokemonV2MovedamageclassdescriptionAvgFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovedamageclassdescriptionAvgFieldsModel */
export interface PokemonV2MovedamageclassdescriptionAvgFieldsModelType extends Instance<typeof PokemonV2MovedamageclassdescriptionAvgFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovedamageclassdescriptionAvgFieldsModel */
export { selectFromPokemonV2MovedamageclassdescriptionAvgFields, pokemonV2MovedamageclassdescriptionAvgFieldsModelPrimitives, PokemonV2MovedamageclassdescriptionAvgFieldsModelSelector } from "./PokemonV2MovedamageclassdescriptionAvgFieldsModel.base"

/**
 * PokemonV2MovedamageclassdescriptionAvgFieldsModel
 *
 * aggregate avg on columns
 */
export const PokemonV2MovedamageclassdescriptionAvgFieldsModel = PokemonV2MovedamageclassdescriptionAvgFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
