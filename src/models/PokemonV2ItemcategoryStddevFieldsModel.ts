import { Instance } from "mobx-state-tree"
import { PokemonV2ItemcategoryStddevFieldsModelBase } from "./PokemonV2ItemcategoryStddevFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItemcategoryStddevFieldsModel */
export interface PokemonV2ItemcategoryStddevFieldsModelType extends Instance<typeof PokemonV2ItemcategoryStddevFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemcategoryStddevFieldsModel */
export { selectFromPokemonV2ItemcategoryStddevFields, pokemonV2ItemcategoryStddevFieldsModelPrimitives, PokemonV2ItemcategoryStddevFieldsModelSelector } from "./PokemonV2ItemcategoryStddevFieldsModel.base"

/**
 * PokemonV2ItemcategoryStddevFieldsModel
 *
 * aggregate stddev on columns
 */
export const PokemonV2ItemcategoryStddevFieldsModel = PokemonV2ItemcategoryStddevFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
