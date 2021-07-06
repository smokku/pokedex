import { Instance } from "mobx-state-tree"
import { PokemonV2MovedamageclassdescriptionVarianceFieldsModelBase } from "./PokemonV2MovedamageclassdescriptionVarianceFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovedamageclassdescriptionVarianceFieldsModel */
export interface PokemonV2MovedamageclassdescriptionVarianceFieldsModelType extends Instance<typeof PokemonV2MovedamageclassdescriptionVarianceFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovedamageclassdescriptionVarianceFieldsModel */
export { selectFromPokemonV2MovedamageclassdescriptionVarianceFields, pokemonV2MovedamageclassdescriptionVarianceFieldsModelPrimitives, PokemonV2MovedamageclassdescriptionVarianceFieldsModelSelector } from "./PokemonV2MovedamageclassdescriptionVarianceFieldsModel.base"

/**
 * PokemonV2MovedamageclassdescriptionVarianceFieldsModel
 *
 * aggregate variance on columns
 */
export const PokemonV2MovedamageclassdescriptionVarianceFieldsModel = PokemonV2MovedamageclassdescriptionVarianceFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
