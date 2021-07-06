import { Instance } from "mobx-state-tree"
import { PokemonV2MovedamageclassSumFieldsModelBase } from "./PokemonV2MovedamageclassSumFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovedamageclassSumFieldsModel */
export interface PokemonV2MovedamageclassSumFieldsModelType extends Instance<typeof PokemonV2MovedamageclassSumFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovedamageclassSumFieldsModel */
export { selectFromPokemonV2MovedamageclassSumFields, pokemonV2MovedamageclassSumFieldsModelPrimitives, PokemonV2MovedamageclassSumFieldsModelSelector } from "./PokemonV2MovedamageclassSumFieldsModel.base"

/**
 * PokemonV2MovedamageclassSumFieldsModel
 *
 * aggregate sum on columns
 */
export const PokemonV2MovedamageclassSumFieldsModel = PokemonV2MovedamageclassSumFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
