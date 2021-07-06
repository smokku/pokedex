import { Instance } from "mobx-state-tree"
import { PokemonV2ItemattributeStddevPopFieldsModelBase } from "./PokemonV2ItemattributeStddevPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItemattributeStddevPopFieldsModel */
export interface PokemonV2ItemattributeStddevPopFieldsModelType extends Instance<typeof PokemonV2ItemattributeStddevPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemattributeStddevPopFieldsModel */
export { selectFromPokemonV2ItemattributeStddevPopFields, pokemonV2ItemattributeStddevPopFieldsModelPrimitives, PokemonV2ItemattributeStddevPopFieldsModelSelector } from "./PokemonV2ItemattributeStddevPopFieldsModel.base"

/**
 * PokemonV2ItemattributeStddevPopFieldsModel
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2ItemattributeStddevPopFieldsModel = PokemonV2ItemattributeStddevPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
