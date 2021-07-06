import { Instance } from "mobx-state-tree"
import { PokemonV2ItemattributemapStddevPopFieldsModelBase } from "./PokemonV2ItemattributemapStddevPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItemattributemapStddevPopFieldsModel */
export interface PokemonV2ItemattributemapStddevPopFieldsModelType extends Instance<typeof PokemonV2ItemattributemapStddevPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemattributemapStddevPopFieldsModel */
export { selectFromPokemonV2ItemattributemapStddevPopFields, pokemonV2ItemattributemapStddevPopFieldsModelPrimitives, PokemonV2ItemattributemapStddevPopFieldsModelSelector } from "./PokemonV2ItemattributemapStddevPopFieldsModel.base"

/**
 * PokemonV2ItemattributemapStddevPopFieldsModel
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2ItemattributemapStddevPopFieldsModel = PokemonV2ItemattributemapStddevPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
