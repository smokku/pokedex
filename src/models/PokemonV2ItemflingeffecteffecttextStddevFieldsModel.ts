import { Instance } from "mobx-state-tree"
import { PokemonV2ItemflingeffecteffecttextStddevFieldsModelBase } from "./PokemonV2ItemflingeffecteffecttextStddevFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItemflingeffecteffecttextStddevFieldsModel */
export interface PokemonV2ItemflingeffecteffecttextStddevFieldsModelType extends Instance<typeof PokemonV2ItemflingeffecteffecttextStddevFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemflingeffecteffecttextStddevFieldsModel */
export { selectFromPokemonV2ItemflingeffecteffecttextStddevFields, pokemonV2ItemflingeffecteffecttextStddevFieldsModelPrimitives, PokemonV2ItemflingeffecteffecttextStddevFieldsModelSelector } from "./PokemonV2ItemflingeffecteffecttextStddevFieldsModel.base"

/**
 * PokemonV2ItemflingeffecteffecttextStddevFieldsModel
 *
 * aggregate stddev on columns
 */
export const PokemonV2ItemflingeffecteffecttextStddevFieldsModel = PokemonV2ItemflingeffecteffecttextStddevFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
