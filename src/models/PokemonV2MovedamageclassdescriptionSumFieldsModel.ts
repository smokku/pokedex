import { Instance } from "mobx-state-tree"
import { PokemonV2MovedamageclassdescriptionSumFieldsModelBase } from "./PokemonV2MovedamageclassdescriptionSumFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovedamageclassdescriptionSumFieldsModel */
export interface PokemonV2MovedamageclassdescriptionSumFieldsModelType extends Instance<typeof PokemonV2MovedamageclassdescriptionSumFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovedamageclassdescriptionSumFieldsModel */
export { selectFromPokemonV2MovedamageclassdescriptionSumFields, pokemonV2MovedamageclassdescriptionSumFieldsModelPrimitives, PokemonV2MovedamageclassdescriptionSumFieldsModelSelector } from "./PokemonV2MovedamageclassdescriptionSumFieldsModel.base"

/**
 * PokemonV2MovedamageclassdescriptionSumFieldsModel
 *
 * aggregate sum on columns
 */
export const PokemonV2MovedamageclassdescriptionSumFieldsModel = PokemonV2MovedamageclassdescriptionSumFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
