import { Instance } from "mobx-state-tree"
import { PokemonV2ItemeffecttextStddevFieldsModelBase } from "./PokemonV2ItemeffecttextStddevFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItemeffecttextStddevFieldsModel */
export interface PokemonV2ItemeffecttextStddevFieldsModelType extends Instance<typeof PokemonV2ItemeffecttextStddevFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemeffecttextStddevFieldsModel */
export { selectFromPokemonV2ItemeffecttextStddevFields, pokemonV2ItemeffecttextStddevFieldsModelPrimitives, PokemonV2ItemeffecttextStddevFieldsModelSelector } from "./PokemonV2ItemeffecttextStddevFieldsModel.base"

/**
 * PokemonV2ItemeffecttextStddevFieldsModel
 *
 * aggregate stddev on columns
 */
export const PokemonV2ItemeffecttextStddevFieldsModel = PokemonV2ItemeffecttextStddevFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
