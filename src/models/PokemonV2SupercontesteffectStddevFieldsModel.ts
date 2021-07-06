import { Instance } from "mobx-state-tree"
import { PokemonV2SupercontesteffectStddevFieldsModelBase } from "./PokemonV2SupercontesteffectStddevFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2SupercontesteffectStddevFieldsModel */
export interface PokemonV2SupercontesteffectStddevFieldsModelType extends Instance<typeof PokemonV2SupercontesteffectStddevFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2SupercontesteffectStddevFieldsModel */
export { selectFromPokemonV2SupercontesteffectStddevFields, pokemonV2SupercontesteffectStddevFieldsModelPrimitives, PokemonV2SupercontesteffectStddevFieldsModelSelector } from "./PokemonV2SupercontesteffectStddevFieldsModel.base"

/**
 * PokemonV2SupercontesteffectStddevFieldsModel
 *
 * aggregate stddev on columns
 */
export const PokemonV2SupercontesteffectStddevFieldsModel = PokemonV2SupercontesteffectStddevFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
