import { Instance } from "mobx-state-tree"
import { PokemonV2ItemattributeStddevFieldsModelBase } from "./PokemonV2ItemattributeStddevFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItemattributeStddevFieldsModel */
export interface PokemonV2ItemattributeStddevFieldsModelType extends Instance<typeof PokemonV2ItemattributeStddevFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemattributeStddevFieldsModel */
export { selectFromPokemonV2ItemattributeStddevFields, pokemonV2ItemattributeStddevFieldsModelPrimitives, PokemonV2ItemattributeStddevFieldsModelSelector } from "./PokemonV2ItemattributeStddevFieldsModel.base"

/**
 * PokemonV2ItemattributeStddevFieldsModel
 *
 * aggregate stddev on columns
 */
export const PokemonV2ItemattributeStddevFieldsModel = PokemonV2ItemattributeStddevFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
