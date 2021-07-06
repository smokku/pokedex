import { Instance } from "mobx-state-tree"
import { PokemonV2ItemcategorynameStddevPopFieldsModelBase } from "./PokemonV2ItemcategorynameStddevPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItemcategorynameStddevPopFieldsModel */
export interface PokemonV2ItemcategorynameStddevPopFieldsModelType extends Instance<typeof PokemonV2ItemcategorynameStddevPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemcategorynameStddevPopFieldsModel */
export { selectFromPokemonV2ItemcategorynameStddevPopFields, pokemonV2ItemcategorynameStddevPopFieldsModelPrimitives, PokemonV2ItemcategorynameStddevPopFieldsModelSelector } from "./PokemonV2ItemcategorynameStddevPopFieldsModel.base"

/**
 * PokemonV2ItemcategorynameStddevPopFieldsModel
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2ItemcategorynameStddevPopFieldsModel = PokemonV2ItemcategorynameStddevPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
