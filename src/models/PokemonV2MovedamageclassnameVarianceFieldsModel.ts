import { Instance } from "mobx-state-tree"
import { PokemonV2MovedamageclassnameVarianceFieldsModelBase } from "./PokemonV2MovedamageclassnameVarianceFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovedamageclassnameVarianceFieldsModel */
export interface PokemonV2MovedamageclassnameVarianceFieldsModelType extends Instance<typeof PokemonV2MovedamageclassnameVarianceFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovedamageclassnameVarianceFieldsModel */
export { selectFromPokemonV2MovedamageclassnameVarianceFields, pokemonV2MovedamageclassnameVarianceFieldsModelPrimitives, PokemonV2MovedamageclassnameVarianceFieldsModelSelector } from "./PokemonV2MovedamageclassnameVarianceFieldsModel.base"

/**
 * PokemonV2MovedamageclassnameVarianceFieldsModel
 *
 * aggregate variance on columns
 */
export const PokemonV2MovedamageclassnameVarianceFieldsModel = PokemonV2MovedamageclassnameVarianceFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
