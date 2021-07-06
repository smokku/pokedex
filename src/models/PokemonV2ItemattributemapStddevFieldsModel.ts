import { Instance } from "mobx-state-tree"
import { PokemonV2ItemattributemapStddevFieldsModelBase } from "./PokemonV2ItemattributemapStddevFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItemattributemapStddevFieldsModel */
export interface PokemonV2ItemattributemapStddevFieldsModelType extends Instance<typeof PokemonV2ItemattributemapStddevFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemattributemapStddevFieldsModel */
export { selectFromPokemonV2ItemattributemapStddevFields, pokemonV2ItemattributemapStddevFieldsModelPrimitives, PokemonV2ItemattributemapStddevFieldsModelSelector } from "./PokemonV2ItemattributemapStddevFieldsModel.base"

/**
 * PokemonV2ItemattributemapStddevFieldsModel
 *
 * aggregate stddev on columns
 */
export const PokemonV2ItemattributemapStddevFieldsModel = PokemonV2ItemattributemapStddevFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
