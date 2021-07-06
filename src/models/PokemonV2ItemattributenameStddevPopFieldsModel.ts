import { Instance } from "mobx-state-tree"
import { PokemonV2ItemattributenameStddevPopFieldsModelBase } from "./PokemonV2ItemattributenameStddevPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItemattributenameStddevPopFieldsModel */
export interface PokemonV2ItemattributenameStddevPopFieldsModelType extends Instance<typeof PokemonV2ItemattributenameStddevPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemattributenameStddevPopFieldsModel */
export { selectFromPokemonV2ItemattributenameStddevPopFields, pokemonV2ItemattributenameStddevPopFieldsModelPrimitives, PokemonV2ItemattributenameStddevPopFieldsModelSelector } from "./PokemonV2ItemattributenameStddevPopFieldsModel.base"

/**
 * PokemonV2ItemattributenameStddevPopFieldsModel
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2ItemattributenameStddevPopFieldsModel = PokemonV2ItemattributenameStddevPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
