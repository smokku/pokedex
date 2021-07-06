import { Instance } from "mobx-state-tree"
import { PokemonV2ItemflingeffectStddevFieldsModelBase } from "./PokemonV2ItemflingeffectStddevFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItemflingeffectStddevFieldsModel */
export interface PokemonV2ItemflingeffectStddevFieldsModelType extends Instance<typeof PokemonV2ItemflingeffectStddevFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemflingeffectStddevFieldsModel */
export { selectFromPokemonV2ItemflingeffectStddevFields, pokemonV2ItemflingeffectStddevFieldsModelPrimitives, PokemonV2ItemflingeffectStddevFieldsModelSelector } from "./PokemonV2ItemflingeffectStddevFieldsModel.base"

/**
 * PokemonV2ItemflingeffectStddevFieldsModel
 *
 * aggregate stddev on columns
 */
export const PokemonV2ItemflingeffectStddevFieldsModel = PokemonV2ItemflingeffectStddevFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
