import { Instance } from "mobx-state-tree"
import { PokemonV2ItemflingeffecteffecttextMaxFieldsModelBase } from "./PokemonV2ItemflingeffecteffecttextMaxFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItemflingeffecteffecttextMaxFieldsModel */
export interface PokemonV2ItemflingeffecteffecttextMaxFieldsModelType extends Instance<typeof PokemonV2ItemflingeffecteffecttextMaxFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemflingeffecteffecttextMaxFieldsModel */
export { selectFromPokemonV2ItemflingeffecteffecttextMaxFields, pokemonV2ItemflingeffecteffecttextMaxFieldsModelPrimitives, PokemonV2ItemflingeffecteffecttextMaxFieldsModelSelector } from "./PokemonV2ItemflingeffecteffecttextMaxFieldsModel.base"

/**
 * PokemonV2ItemflingeffecteffecttextMaxFieldsModel
 *
 * aggregate max on columns
 */
export const PokemonV2ItemflingeffecteffecttextMaxFieldsModel = PokemonV2ItemflingeffecteffecttextMaxFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
