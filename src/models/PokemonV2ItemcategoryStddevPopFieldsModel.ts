import { Instance } from "mobx-state-tree"
import { PokemonV2ItemcategoryStddevPopFieldsModelBase } from "./PokemonV2ItemcategoryStddevPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItemcategoryStddevPopFieldsModel */
export interface PokemonV2ItemcategoryStddevPopFieldsModelType extends Instance<typeof PokemonV2ItemcategoryStddevPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemcategoryStddevPopFieldsModel */
export { selectFromPokemonV2ItemcategoryStddevPopFields, pokemonV2ItemcategoryStddevPopFieldsModelPrimitives, PokemonV2ItemcategoryStddevPopFieldsModelSelector } from "./PokemonV2ItemcategoryStddevPopFieldsModel.base"

/**
 * PokemonV2ItemcategoryStddevPopFieldsModel
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2ItemcategoryStddevPopFieldsModel = PokemonV2ItemcategoryStddevPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
