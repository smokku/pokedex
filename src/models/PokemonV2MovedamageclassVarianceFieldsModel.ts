import { Instance } from "mobx-state-tree"
import { PokemonV2MovedamageclassVarianceFieldsModelBase } from "./PokemonV2MovedamageclassVarianceFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovedamageclassVarianceFieldsModel */
export interface PokemonV2MovedamageclassVarianceFieldsModelType extends Instance<typeof PokemonV2MovedamageclassVarianceFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovedamageclassVarianceFieldsModel */
export { selectFromPokemonV2MovedamageclassVarianceFields, pokemonV2MovedamageclassVarianceFieldsModelPrimitives, PokemonV2MovedamageclassVarianceFieldsModelSelector } from "./PokemonV2MovedamageclassVarianceFieldsModel.base"

/**
 * PokemonV2MovedamageclassVarianceFieldsModel
 *
 * aggregate variance on columns
 */
export const PokemonV2MovedamageclassVarianceFieldsModel = PokemonV2MovedamageclassVarianceFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
